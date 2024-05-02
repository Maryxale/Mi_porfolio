const Contact = () => {
  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center "
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
        Contactame
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6">
          <input
            className="w-full my-3 rounded-lg bg-Purple-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-Purple-500"
            placeholder="Escribe tu nombre"
            type="text"
          />
          <input
            className="w-full my-3 rounded-lg bg-Purple-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-Purple-500"
            placeholder="Escribe tu email"
            type="text"
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-Purple-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-Purple-500"
          placeholder="Escribe tu mensaje"
          name=""
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <button></button>
      </form>
    </div>
  );
};

export default Contact;
