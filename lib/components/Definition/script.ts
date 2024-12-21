export const toggleAccordion = (event: React.MouseEvent<HTMLElement>) => {
  const target = event.currentTarget,
    icon = target.querySelector(".idc-accordion-icon"),
    accordion = target.closest(".idc-accordion"),
    content = accordion
      ? accordion.querySelector<HTMLElement>(".idc-accordion-content")
      : null,
    hidden = content != null ? content.hidden : null;

  if (hidden) {
    target.setAttribute("aria-expanded", "true");
    if (icon) {
      icon.classList.remove("rotate-0");
      icon.classList.add("rotate-180");
    }
  } else {
    target.setAttribute("aria-expanded", "false");
    if (icon) {
      icon.classList.add("rotate-0");
      icon.classList.remove("rotate-180");
    }
  }

  if (content) {
    content.hidden = !hidden;
  }
};
