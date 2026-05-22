import CopyIcon from '../../../../icons/CopyIcon.jsx';

export default function ContactCard({value, icon, label}) {
    const Icon = icon;
    return (
        <div className="contact-card">
            <div className="contact-icon-wrapper">
                <Icon className="contact-icon"/>
            </div>
            <div className="contact-value-wrapper">
                <p>{value}</p>
            </div>
        </div>
    );
}

/*
<CopyIcon className="contact-copy-icon"/>
 */