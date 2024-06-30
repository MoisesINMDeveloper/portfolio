const Skills = ({ skills }: { skills: { name: string }[] }) => {
  return (
    <ul className=" p-4 rounded-xl shadow-lg flex flex-wrap">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="bg-GreenColor text-black px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2"
        >
          {skill.name}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
