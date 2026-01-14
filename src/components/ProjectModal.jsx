export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between px-10 py-6 border-b">
          <h3 className="text-2xl font-semibold text-gray-900 max-w-3xl">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 text-3xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-10 grid gap-10 max-h-[75vh] overflow-y-auto">

          <div className="bg-slate-50 rounded-2xl p-8 flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-72 object-contain"
            />
          </div>

          <section>
            <h4 className="text-lg font-semibold mb-2">Abstract</h4>
            <p className="text-gray-700 leading-relaxed">
              {project.abstract}
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold mb-2">Project Description</h4>
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold mb-2">Technologies</h4>
            <p className="text-gray-700">{project.technologies}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-10 py-6 border-t flex justify-end">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-brand px-8 py-3 text-white text-sm font-medium"
          >
            Request full project
          </a>
        </div>
      </div>
    </div>
  );
}
