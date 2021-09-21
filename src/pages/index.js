import { Head } from "../components/Head";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./index.module.css";
import { LiveStateProvider, useLiveState, uuid } from "livestate";
import { Button } from "../components/Button";
import { useEffect } from "react";
import { NewsletterSubscription } from "~/components/NewsletterSubscription";

const codeString = `// usage in React
const [{ count }, setState] = useLiveState({
  id: "global-counter", // uuid()
  defaultValue: { count: 1 }
})

<button onClick={() => setState({ count: count + 1 })}>
  Increment
</button>

<button onClick={() => setState({ count: 1 })}>
  Reset
</button>

<p>{count}</p>
`;

const Logo = () => (
  <div className="flex flex-row items-center">
    <Image src="/img/logo.png" height={45} width={43} />{" "}
    <span className="ml-4 text-white text-3xl font-jellee font-medium">
      livestate.io
    </span>
  </div>
);

export default function Home() {
  return (
    <div className="bg-gray-900 h-full text-center px-2">
      <nav className="px-8 py-4 flex flex-row items-center justify-between border-b mb-4">
        <Logo />
        <div className="items-center text-white">
          <a target="_blank" href="https://github.com/livestate/livestate">
            Github
          </a>
        </div>
      </nav>
      <main className="flex flex-col items-center">
        <div className="mt-4 mb-8">
          <p className="uppercase text-gray-500">
            Still using REST or GraphQL? 😅
          </p>
          <h1 className="text-3xl font-jellee text-gray-300">
            realtime, universal state as a service platform
          </h1>
        </div>

        <div>
          <h3 className="font-jellee text-3xl text-white">Example</h3>
          <div className="flex rounded-3xl border-gray-400 border-4 p-4 my-4 justify-around">
            <div className="overflow-hidden rounded-xl border border-gray-800 mr-8">
              <SyntaxHighlighter
                showLineNumbers
                language="js"
                style={atomDark}
                customStyle={{ margin: 0 }}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
            <div>
              <h4 className="text-white text-6xl my-8">Result</h4>
              <LiveStateExample />
              <p className="text-gray-400 italic text-sm">
                Open a second browser window and click 3 times to see the magic
                🪄
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-[640px]">
          <div className="my-16">
            <NewsletterSubscription />
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>How it works 🦾</h3>
            <p className={styles.sectionText}>
              livestate.io is a ephemeral in-memory key:value online data store,
              which holds the state in a JSON like structure. Every state object
              is identified by an id (uuid). When you change your state on the
              client side, the patch (
              <a href="https://tools.ietf.org/html/rfc6902" target="_blank">
                https://tools.ietf.org/html/rfc6902
              </a>
              ) is pushed to the server and broadcasted to other clients, which
              have subscribed to the same id.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              What can you build with it 🎉
            </h3>
            <div className={styles.sectionText}>
              <p>
                Its main purpose are small realtime applications, shared state,
                like a simple chat, signalling server for webRTC or a live
                planning-poker application.
              </p>
              <p className="mt-2">
                I'll create some example Apps in the near future ;)
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Its Fast and reliable 😎</h3>
            <p className={styles.sectionText}>
              The architecture of livestate.io is very reliable, as it is based
              on elixir and phoenix, and runs on the Beam with "awesome
              performance".
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Security 🔐</h3>
            <p className={styles.sectionText}>
              Right now, as this is just a Proof of Concept there is no security
              at all. Everyone can change the state by id. However, there are
              plans to implement an access model and permissions system which
              would also require an auth layer.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Roadmap ⏳</h3>
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
            <h3 className={styles.sectionTitle}>Contribute 🦺</h3>
            <p className={styles.sectionText}>
              You are welcome to contribute smart ideas. livestate is based on:
            </p>
            <ul className="list list-disc list-inside mt-2">
              <li>Elixir</li>
              <li>Phoenix</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              Sponsoring & Commercial use 💰
            </h3>
            <p className={styles.sectionText}>
              If you feel, that you have a cool use case, and would like to
              sponsor this Project and to place your company logo here as long
              as it is still affordable, send me an{" "}
              <a
                className=""
                href="mailto:Boris<bk@webdeb.de>?subject=livestate.io"
              >
                E-Mail
              </a>
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Credits 🙏</h3>
            <p className={styles.sectionText}>
              <a target="_blank" className="" href="https://elixir-lang.org">
                Elixir
              </a>
              <a
                target="_blank"
                className=""
                href="https://www.phoenixframework.org"
              >
                PhoenixFramework
              </a>
              <a target="_blank" className="" href="https://gigalixir.com/">
                Gigalixir
              </a>
              <a target="_blank" className="" href="https://vercel.com">
                Vercel
              </a>
            </p>

            <ul className="list-inside list-disc">
              <li>Elixir & Phoenix are building the backend</li>
              <li>I am very thankful that I can run it on Gigalixir</li>
              <li>
                This webpage is build with Next.js and is hosted by vercel
              </li>
            </ul>
            <p className="mt-2">
              This PoC is a good example, how different technologies can &
              should work together. Thanks for visiting.
            </p>
          </div>
        </div>
      </main>
      <footer className="px-8 py-4 border-t mt-12 flex flex-row items-center justify-between">
        <Logo />
        <div className="items-center text-white">
          <a target="_blank" href="https://github.com/livestate/livestate">
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}

const defaultValue = { counter: 1 };
const myId = typeof window !== "undefined" && uuid("uuid");
const LiveStateExample = () => {
  const [{ counter, visitors = [] }, setState] = useLiveState({
    id: "global-counter",
    defaultValue,
  });

  return (
    <div>
      <div className="flex flex-row justify-between w-full my-2">
        <Button
          className="mr-2"
          onClick={() => setState({ counter: counter + 1 })}
        >
          Increment
        </Button>
        <Button onClick={() => setState(defaultValue)}>Reset</Button>
      </div>
      <p className="p-2 bg-gray-50 border-gray-400 rounded-3xl border-2 my-2 text-gray-600">
        {counter}
      </p>
    </div>
  );
};
