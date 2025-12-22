import { motion } from "framer-motion";

interface PortfolioFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const PortfolioFilter = ({ categories, activeFilter, onFilterChange }: PortfolioFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onFilterChange("All")}
        className={`px-6 py-2 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 ${
          activeFilter === "All"
            ? "bg-primary text-primary-foreground"
            : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
        }`}
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 ${
            activeFilter === category
              ? "bg-primary text-primary-foreground"
              : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};
