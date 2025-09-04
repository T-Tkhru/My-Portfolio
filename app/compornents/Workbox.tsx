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
        <button
          className="w-full text-left text-2xl text-black hover:opacity-70 duration-300 focus:outline-none"
          onClick={handleClick}
        >
          <div className="relative w-full pb-[70.71%] overflow-hidden">
            <img
              src={props.image}
              alt={props.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <p className="mt-2">{props.title}</p>
        </button>
      </Animation>
    </li>
  );
};

export default Workbox;
