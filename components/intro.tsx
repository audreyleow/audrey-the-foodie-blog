const Intro = ({ text }: { text: string }) => {
  return (
    <section className="flex-col flex items-center mt-12 mb-12 md:mb-8">
      <h4 className="intro-text">{text}</h4>
    </section>
  );
};

export default Intro;
