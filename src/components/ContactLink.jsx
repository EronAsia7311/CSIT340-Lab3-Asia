function ContactLink({ label, href, text }) {
  return (
    <li>
      <span className="inline-block w-24 text-sm text-stone-500">{label}</span>
      <a className="font-medium hover:underline" href={href} aria-label={label}>{text}</a>
    </li>
  );
}

export default ContactLink