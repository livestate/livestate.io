import { Head } from "../components/Head";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./index.module.css";
import { LiveStateProvider, useLiveState } from "livestate";

const codeString = `// usage in React
const [state, setState] = useLiveState({
  id: 'global-counter',
  defaultValue: { counter: 1 }
})

return <button
  onClick={() => setState({ count: state.count + 1 })}>
  Click to inc {state.count}
</button>
`;

const Logo = () => (
  <div className="flex flex-row items-center">
    <Image src="/img/logo.png" height={45} width={43} />{" "}
    <span className="ml-4 text-white text-3xl font-jellee font-medium text-flamingo-800">
      livestate.io
    </span>
  </div>
);
export default function Home() {
  return (
    <div className="bg-gray-900 h-full text-center">
      <nav className="px-8 py-4 flex flex-row items-center justify-between border-b mb-4">
        <Logo />
        <div className="items-center text-white">
          <a
            target="_blank"
            className="hover:text-flamingo-300"
            href="https://github.com/livestate/livestate"
          >
            Github
          </a>
        </div>
      </nav>
      <main className="flex flex-col items-center">
        <div className="mt-4 mb-8">
          <p className="uppercase text-gray-500">
            Still using REST or GraphQL?
          </p>
          <h1 className="text-3xl font-jellee text-gray-300">
            realtime, universal state as a service
          </h1>
        </div>
        <div className="max-w-[640px] overflow-hidden rounded-xl border border-gray-800">
          <SyntaxHighlighter
            showLineNumbers
            language="js"
            style={atomDark}
            customStyle={{ margin: 0 }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <LiveStateExample />

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>How it works</h3>
          <p className={styles.sectionText}>
            livestate.io is a ephemeral in-memory key:value online data store,
            which holds the state in a JSON like strukture. Every piece of state
            is identified by some id (uuid). When you change your state on the
            client side, the patch (
            <a href="https://tools.ietf.org/html/rfc6902" target="_blank">
              https://tools.ietf.org/html/rfc6902
            </a>
            ) is pushed to the server and broadcasted to other clients, which
            have subscribed to the same id.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Its Fast and reliable</h3>
          <p className={styles.sectionText}>
            The architecture of livestate.io is very reliable, as it is a based
            elixir and phoenix, and runs on the Beam with "awesome performance"
            isn't it enough of a benchmark? :) Ok, if you need numbers, we are
            speaking about microseconds.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Security</h3>
          <p className={styles.sectionText}>
            Right now, as this is just a Proof of Concept there is no security
            at all. Everyone can change the state by id. However, there are
            plans to implement an access model and permissions system which
            would also require an auth layer.
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>What can you build with it</h3>
          <p className={styles.sectionText}>
            Its possible to build any type of application which requires shared
            state, like a chat, quiz, shopping cart in a e-Commerce application,
            webRTC signalling server to exchange or a live planning-poker
            application.
          </p>
          <p>
            Theoretically you can hardcode a channel id which is then shared
            between all of your clients and use it as an exchange of state ids.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Limitations</h3>
          <p className={styles.sectionText}>
            For now this is just a small Proof of Concept. It runs on
            gigalixir.com on the free tier with limited resources. Each state
            object is limited to 10kb in size. Which is not a lot, but should be
            enough for small pieces of state, which you would like to share.
          </p>
          <p className={styles.sectionText}>
            The main goal is to see how far we can go with it. So, you can use
            it for free without any warranties.
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Roadmap</h3>
          <ul className={styles.sectionText}>
            <li>Auth & Security</li>
            <li>Schema & Validation</li>
            <li>Webhooks</li>
            <li>Persistence</li>
            <li>Observability</li>
            <li>Time-Travel</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contribute</h3>
          <p className={styles.sectionText}>
            If you feel comfortable with this technologies, it is definetely a
            good idea to help with a pull request.
            <ul className="list list-disc list-inside mt-2">
              <li>Elixir</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Sponsoring & Commercial use</h3>
          <p className={styles.sectionText}>
            If you feel, that you have a cool use case, and would like to
            sponsor this humble #NextBigThing Project and to place your company
            logo here as long as it is still affordable, send me an{" "}
            <a
              className=""
              href="mailto:Boris<bk@webdeb.de>?subject=livestate.io"
            >
              E-Mail
            </a>
          </p>
        </div>
      </main>
      <footer className="px-8 py-4 border-t mt-12 flex flex-row items-center justify-between">
        <Logo />
        <div className="items-center text-white">
          <a
            target="_blank"
            className="hover:text-flamingo-300"
            href="https://github.com/livestate/livestate"
          >
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}

const LiveStateExample = () => {
  return <Counter />;
};

const Counter = () => {
  const [state, setState] = useLiveState({
    id: "global-counter",
    defaultValue: { counter: 0 },
  });

  return (
    <button
      className="m-4 p-2 px-8 text-flamingo-800 bg-white transition hover:bg-flamingo-300 rounded-xl font-jellee border-flamingo-800 border-2"
      onClick={() => setState({ counter: state.counter + 1 })}
    >
      Click to inc
      <br /> {state.counter}
    </button>
  );
};
