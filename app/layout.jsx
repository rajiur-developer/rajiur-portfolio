import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../src/index.css";
import "../src/assets/css/BlobCursor.css";
import "../src/assets/css/MagicBento.css";
import "../src/assets/css/Particles.css";
import "../src/assets/css/Project.css";
import "../src/assets/css/TextType.css";

export const metadata = {
  title: "Rajiur Rahman | Front-End Developer",
  description:
    "The personal portfolio of Rajiur Rahman, a front-end developer creating responsive and interactive web experiences.",
  icons: {
    icon: "/FaveIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
