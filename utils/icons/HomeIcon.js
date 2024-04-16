export default function HomeIcon({ selected }) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      className={selected ? "icon" : ""}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#ffffff"
          d="M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z"
        ></path>
      </g>
    </svg>
  );
}
