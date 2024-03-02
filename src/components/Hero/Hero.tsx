import Button from "../Button/Button";
export default function Hero() {
  return (
    <section
      className={`flex w-full h-dvh pt-[87px] items-center justify-center`}
    >
      <div className={`max-w-[650px] lg:w-full`}>
        <div className={"flex flex-col items-center gap-3 w-full  px-2"}>
          <h1 className="text-3xl w-full text-white font-bold ">
            VOCÊ LIGADO NO FUTURO E PROTEGIDO NO PRESENTE!
          </h1>
          <div className={"flex flex-col items-center gap-20 md:gap-10"}>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className="w-[50%] p-2 text-white">
              Faça um orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
