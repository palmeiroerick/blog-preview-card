import Author from "@/components/Author";
import Date from "@/components/Date";
import Illustration from "@/components/Illustration";
import Learning from "@/components/Learning";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <main className="flex w-80 flex-col gap-4 rounded-2xl border bg-white p-7 shadow-[8px_8px_0_0_rgba(0,0,0)]">
      <Illustration />
      <Learning />
      <Date />
      <Title />
      <Text />
      <Author />
    </main>
  );
};

export default Home;
