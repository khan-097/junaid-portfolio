import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>মোঃ যুনাইদ খান</p>
          <p className="text-white-50 text-sm">Photographer · Designer · Creative</p>
        </div>
        <div className="socials">
          {socialImgs.map((s, i) => (
            <a key={i} href={s.url || "#"} target="_blank" rel="noopener noreferrer" className="icon">
              <img src={s.imgPath} alt={s.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">© {new Date().getFullYear()} Md. Junaid Khan. All rights reserved.</p>
          <p className="text-center md:text-end text-white-50 text-sm">+880 1743-558176 · mdjunaidkhan097@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
