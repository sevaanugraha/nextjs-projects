export function Logomark(props) {
  return (
    <img alt="info GPT" src="/infoGPT.png" className="w-1/2" {...props} />
  );
}

export function Logo(props) {
  return (
    <div className="flex items-center justify-center">
      <Logomark {...props} />

      <p className="font-poppins text-2xl font-bold tracking-wider">
        YouKnow<span className="text-cyan-500">Me</span>
      </p>
    </div>
  );
}
