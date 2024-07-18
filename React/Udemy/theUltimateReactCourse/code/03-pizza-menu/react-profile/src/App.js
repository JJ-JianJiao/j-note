import "./styles.css";

const skills = [
  {
    name: "Unity 2D/3D",
    level: "Advanced",
    color: "#faa2c1",
  },
  {
    name: "Unreal",
    level: "Intermediate",
    color: "#dbe4ff",
  },
  {
    name: "C++",
    level: "Intermediate",
    color: "#ffd8a8",
  },
  {
    name: "C#",
    level: "Advanced",
    color: "#ffc9c9",
  },
  {
    name: "Git, Github and Gitlab",
    level: "Intermediate",
    color: "#d0bfff",
  },
  {
    name: "HTML + CSS",
    level: "Advanced",
    color: "#99e9f2",
  },
  {
    name: "React",
    level: "Advanced",
    color: "#d8f5a2",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    color: "#ffec99",
  },
  {
    name: "Computer Graphic",
    level: "Beginner",
    color: "#c5f6fa",
  },
];

export default function App() {
  const imgPath = "./photo.jpg";
  const name = "Jian Jiao";
  const intro =
    "A game and full stack web developer. When I do not work, I would like to watch movies and play videos games. I also like to travel with my family.";
  const skillOne = "Unity 2D/3D";
  const emoji = "💪";
  return (
    <div className="card">
      <Avatar imgPath={imgPath} />
      <div className="data">
        <Intro name={name} intro={intro} />
        <SkillList skillList={skills} />
      </div>
    </div>
  );
}

const Avatar = function ({ imgPath }) {
  return <img className="avatar" src={imgPath} alt="A Avatar photo" />;
};

const Intro = function ({ name, intro }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{intro}</p>
    </>
  );
};

const SkillList = function ({ skillList }) {
  return (
    <div className="skill-list">
      {skillList.map((s) => (
        <Skill skill={s} key={s.name} />
      ))}
    </div>
  );
};

const Skill = function ({ skill }) {
  console.log(skill);
  console.log(skill.color);
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.name}</span>
      <span>
        {skill.level === "Advanced" && "💪"}
        {skill.level === "Intermediate" && "👍"}
        {skill.level === "Beginner" && "👌"}
      </span>
      {/* <SkillLevel level={skill.level} /> */}
    </div>
  );
};

const SkillLevel = function ({ level }) {
  if (level === "Advanced") return <span>💪</span>;
  if (level === "Intermediate") return <span>👍</span>;
  if (level === "Beginner") return <span>👌</span>;
};

function GenerateRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r},${g},${b})`;
}
