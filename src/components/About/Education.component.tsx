import { motion } from "framer-motion";
import { data } from "../../data/data";

const { education } = data;

export const Education = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = '<div class="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center"><i class="fa-solid fa-graduation-cap text-primary text-2xl"></i></div>';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {education.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card p-6 hover:scale-105 transition-transform duration-300"
        >
          <div className="flex gap-4">
            <div className="avatar">
              <div className="w-16 h-16 rounded-lg">
                <img
                  src={edu.imgUrl}
                  alt={edu.institution}
                  onError={handleImageError}
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-primary">{edu.institution}</h3>
              <p className="text-sm text-base-content/80">{edu.description}</p>

              <div className="flex items-center gap-2 mt-2">
                <span className={`badge badge-sm ${
                  edu.status === "Completed" ? "badge-success" : "badge-warning"
                }`}>
                  {edu.status}
                </span>

                {edu.certificate && (
                  <a
                    href={edu.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    View Certificate
                  </a>
                )}
              </div>

              {/* Progress bar */}
              {edu.completion < 100 && (
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>{edu.completion}%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${edu.completion}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
