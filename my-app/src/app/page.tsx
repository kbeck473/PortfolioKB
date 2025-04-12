import { Container, Flex, Heading, Text, Card } from "@radix-ui/themes";
import ProjectPage from "./components/projects/ProjectPage";
// Ensure the correct import path and case sensitivity

export default function Home() {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

          <Flex direction="column">
                <Heading>My Portfolio</Heading>
                <Text color="gray">Welcome to my portfolio! Here you will find my projects and skills.</Text>
                <ProjectPage/>
           </Flex>

     </main>
  );
}
