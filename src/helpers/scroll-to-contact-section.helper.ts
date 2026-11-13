export const buttonClassName: string = "scroll-to-contact-button";

export function scrollToContactSectionHelper(sectionId: string = 'contact'): void  {
    const buttons = document.getElementsByClassName(buttonClassName);

    for (const button of buttons) {
        button.addEventListener('click', () => document.getElementById(sectionId)?.scrollIntoView())
    }
}