import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ArrowRight, Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "UI OTG",
          description:
            "A Generative AI-based UI framework for real-time data interaction and dynamic component creation from user prompts",
          explainer: "https://youtu.be/u7h6lMfTuzM",
        },
        {
          title: "Kaise Ho?",
          description: "A better way to know how your friends are doing",
          demo: "https://kaise-ho.vercel.app",
        },
        {
          title: "Typesafe Data Layer",
          description:
            "Fullstack type safety by utilising GraphQL as the single source of truth for types",
          github: "https://github.com/santosh898/typesafe-graphql",
          explainer: "https://youtu.be/0E5VtmZig90",
        },
        {
          title: "GPT with Friends",
          description:
            "Browser Extension to chat with your friends over ChatGPT conversations",
          explainer: "https://youtu.be/2RSKDraJoaI",
        },
        {
          title: "The Light Project",
          description: "Controlling Devices using Thingsboard and MicroPython",
          github: "https://github.com/santosh898/thelightproject",
          explainer: "https://youtu.be/PhOGF6qlicc",
        },
        {
          title: "Side Notes",
          description:
            "Browser Extension that displays notepad on ChatGPT's side",
          extension:
            "https://chromewebstore.google.com/detail/sidenotes/cigckffjdllglonilacoipobihdlgcld",
        },
      ].map((project, index) => (
        <Card
          key={index}
          className="bg-gray-900 border-gray-800 text-gray-100 flex flex-col"
        >
          <CardContent className="p-6 flex-1 relative">
            <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="mb-4 text-sm text-gray-300">{project.description}</p>
            {project.github && (
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="absolute top-2 right-2"
              >
                <Link href={project.github} target="__newtab">
                  <Github />
                </Link>
              </Button>
            )}
          </CardContent>
          <CardFooter>
            {project.demo && (
              <Button asChild variant="secondary">
                <Link href={project.demo} target="__newtab">
                  Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.explainer && (
              <Button asChild variant="secondary">
                <Link href={project.explainer} target="__newtab">
                  Explainer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.extension && (
              <Button asChild variant="secondary">
                <Link href={project.extension} target="__newtab">
                  Extension <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
