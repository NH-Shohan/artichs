const HeroSection = () => {
  return (
    <section className="grid justify-center gap-12 text-center">
      <div className="text-2xl font-semibold tracking-tight text-purple-700 mt-56">
        Hi! We're the Wizerds, great to have you here.
      </div>

      <div className="font-[family-name:var(--font-obviously)] uppercase text-9xl w-full text-center">
        <div className="flex gap-5">
          We
          <picture>
            <source
              srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f608/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f608/512.gif"
              alt="😈"
              className="h-32 -mt-3"
            />
          </picture>
          turn your <span className="text-purple-400">ideas</span> into
        </div>
        <div>
          <span className="text-purple-700">creative</span> impact!
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
