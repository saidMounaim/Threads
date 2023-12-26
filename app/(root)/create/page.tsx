import FormCreateThread from "@/app/components/FormCreateThread";

const CreateThreadPage = () => {
  return (
    <section className="max-w-4xl mt-11 flex flex-col gap-5 ml-16">
      <h1 className="text-3xl font-bold text-white">Create Thread</h1>
      <FormCreateThread />
    </section>
  );
};

export default CreateThreadPage;
