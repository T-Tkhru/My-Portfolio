import Animation from "./Animation";
import Modal from "./Modal";

interface WorkboxProps {
  url: string;
  title: string;
  image: string;
  description?: string;
  githubUrl?: string;
  className: string;
  onOpenModal?: () => void;
  setModalData?: (data: {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    githubUrl?: string;
  }) => void;
}

const Workbox = (props: WorkboxProps) => {
  const handleClick = () => {
    if (props.setModalData) {
      props.setModalData({
        title: props.title,
        description: props.description,
        image: props.image,
        url: props.url,
        githubUrl: props.githubUrl,
      });
    }
    if (props.onOpenModal) {
      props.onOpenModal();
    }
  };

  return (
    <li className={`w-full md:w-1/3 h-auto mb-8 px-2 ${props.className}`}>
      <Animation
        animation="animate__fadeInUp"
        delay="200ms"
        rootMargin="-100px"
      >
        <div className="w-full rounded-2xl border border-gray-300 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
          <button
            className="w-full text-left text-2xl text-black hover:opacity-70 duration-300 focus:outline-none rounded-2xl"
            onClick={handleClick}
          >
            <div className="relative w-full pb-[70.71%] overflow-hidden rounded-t-2xl">
              <img
                src={props.image}
                alt={props.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <p className="mt-2 px-4 pb-4">{props.title}</p>
          </button>
        </div>
      </Animation>
    </li>
  );
};

export default Workbox;
