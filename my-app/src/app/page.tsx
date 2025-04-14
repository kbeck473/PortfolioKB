// app/page.tsx or pages/index.tsx

import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Header from "./components/Header"; // Adjust path if needed
import ProjectPage from "./components/projects/ProjectPage"; // Make sure path is correct

export default function Home() {
  return (
    <>
      <Header />



      <Container size="4" className="py-10">
        <Flex direction="column" gap="6">
          <Heading size="8">My Portfolio</Heading>
          <Text size="4" color="gray">
            Welcome to my portfolio! Here you will find my projects and skills.
          </Text>
          <ProjectPage />
        </Flex>
      </Container>



    </>
  );
}
