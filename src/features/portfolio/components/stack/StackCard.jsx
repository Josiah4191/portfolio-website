import './StackCard.css';

export default function StackCard({label, image}) {
    return (
      <article className="stack-card">
          <img className="stack-card-image" src={image} alt="" aria-hidden="true"/>
          <p className="stack-card-label">{label}</p>
      </article>
    );
}