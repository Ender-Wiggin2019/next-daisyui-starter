import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 glass">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-md lg:flex">
        <div className="dropdown w-48">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="h-2 w-2 fill-current opacity-60 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Retro"
                value="retro"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Valentine"
                value="valentine"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="relative flex place-items-center">
        <div className="card w-96 bg-base-100 shadow-xl glass">
          <figure className="px-10 pt-10">
            {" "}
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/daisyui.svg"
              alt="Daisy UI Logo"
              width={180}
              height={37}
              priority
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Next + daisyUI Starter</h2>
            <p>
              Adds component class names to Tailwind CSS so you can make
              beautiful websites faster than ever.
            </p>

            <div className="card-actions justify-end">
              <Link href="https://daisyui.com/docs/use/" target="_blank">
                <button className="btn btn-active btn-primary">
                  Visit Docs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer max-w-5xl p-10 bg-base-200 text-base-content rounded-box">
        <aside className="flex justify-center items-center">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            className="dark:invert"
            width={150}
            height={50}
            priority
          />
        </aside>
        <nav>
          <header className="footer-title">Next.JS</header>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="link link-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="link link-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a>
        </nav>
        <nav>
          <header className="footer-title">DaisyUI</header>
          <a
            href="https://daisyui.com/components/"
            className="link link-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Components
          </a>
          <a
            href="https://daisyui.com/docs/themes/"
            className="link link-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Theme
          </a>
        </nav>
        <nav>
          <header className="footer-title">Vercel</header>
          <a
            href="https://vercel.com/new"
            className="link link-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy
          </a>
        </nav>
      </footer>
    </main>
  );
}
