export default function StackCard({id, label, image}) {
    return (
      <div className="stack-card">
          <img className="stack-card-image" key={id} src={image} alt={label}></img>
          <p className="stack-card-label">{label}</p>
      </div>
    );
}