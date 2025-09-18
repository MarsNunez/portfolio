import Link from "next/link";

const projects = [
  {
    title: "Whispr .",
    image:
      "https://repository-images.githubusercontent.com/1009080058/94523440-a360-4003-b76c-a80b6345688b",
    link: "https://whispr-front.vercel.app/",
  },
  {
    title: "Moonyard",
    image:
      "https://repository-images.githubusercontent.com/729344936/306cff13-fe81-4c2f-9889-ce03b6241b28",
    link: "https://moonyard.vercel.app/",
  },
  {
    title: "Buddah Studio Nails",
    image: "/img/greenWork.jpg",
    link: "https://buddah-studio-nails.vercel.app/",
  },
  {
    title: "Woodworking",
    image:
      "https://repository-images.githubusercontent.com/670643558/7cccf80d-82c9-4d22-8b80-e7661b42287a",
    link: "https://woodworking-nu.vercel.app/",
  },
  {
    title: "Budget App",
    image:
      "https://repository-images.githubusercontent.com/343801550/3a5bed00-7b82-11eb-8a6a-da2b45c5265c",
    link: "https://budget-app-marcelo-sebastian.netlify.app/",
  },
  {
    title: "Car Insurance App",
    image:
      "https://repository-images.githubusercontent.com/343973441/33a1a880-7c5c-11eb-8861-77a8d9a0d9d0",
    link: "https://insurance-app-marcelo-sebastian.netlify.app/",
  },
];

const LatestProjects = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.title}
            target="_blank"
            rel="noopener noreferrer"
            className="ease-out duration-300 cursor-pointer brightness-65 hover:brightness-100 h-full"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="object-cover w-full h-full"
            />
            <p className="title text-xl">{project.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
