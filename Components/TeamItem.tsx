import Image from "next/image";

function TeamItem({ photo, name, role }: any) {
  return (
    <div className="shadow-xl shadow-[#9bc2ff40] bg-gradient-to-b from-[#C6DBFF] to-[#E1EBFA]">
      <div className="h-52 relative w-full overflow-hidden">
        <img className="w-full h-full" src={photo} alt="" />
      </div>
      <div className="py-3 px-2">
        <h4 className="text-primaryDark font-semibold text-sm">{name}</h4>
        <span className="text-sm text-primary">{role}</span>
      </div>
    </div>
  );
}

export default TeamItem;
