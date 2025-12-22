import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: "videography", label: "Videography" },
  { id: "photography", label: "Photography" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "web-design", label: "Web Design" },
  { id: "crm-automation", label: "CRM Automation" },
];

export const CallbackModal = ({ isOpen, onClose }: CallbackModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: [] as string[],
    requirement: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", phone: "", email: "", services: [], requirement: "" });
      onClose();
    }, 2500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ name: "", phone: "", email: "", services: [], requirement: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-card border border-border rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="text-primary" size={40} />
                  </motion.div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your request. Our team will call you back shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Header */}
                  <div className="bg-primary p-6 flex items-center justify-between">
                    <h3 className="font-display text-2xl text-primary-foreground">Request Callback</h3>
                    <button onClick={handleClose} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      <X size={24} />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone number"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label className="mb-3 block">Select Services</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div key={service.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={formData.services.includes(service.id)}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                            />
                            <label
                              htmlFor={service.id}
                              className="text-sm text-foreground cursor-pointer"
                            >
                              {service.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="requirement">Describe Requirement</Label>
                      <Textarea
                        id="requirement"
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        placeholder="Tell us about your project..."
                        rows={3}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Submit Request
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
