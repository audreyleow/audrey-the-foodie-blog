const Intro = ({ text }: { text: string }) => {
  return (
    <section className="flex-col flex items-center mb-8 mt-8">
      <h4 className="intro-text">{text}</h4>
    </section>
  );
};

export default Intro;
