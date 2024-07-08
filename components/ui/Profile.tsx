import Image from "next/image";

type ProfileProps = {
  src: string,
}

const Profile = ({ src }: ProfileProps) => {
  return (
    <div className="relative rounded-full overflow-clip h-[100px] aspect-square shadow-lg outline">
      <Image src={src} alt="Gionidude profile image" sizes="max-width: 512px" quality={100} fill={true} priority={true} />
    </div>
  )
}

export default Profile;