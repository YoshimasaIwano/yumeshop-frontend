import styles from './styles.module.scss';

export interface TagProps {
  id: string;
  name: string;
  color: string;
  tagGroup: string;
}

// This function takes a color string and converts it to a hex string
function convertColorStringToHex(color: string): string {
  // Create a new element
  const dummy = document.createElement('div');

  // Set the color of the element
  dummy.style.color = color;

  // Append the element to the body
  document.body.appendChild(dummy);

  // Get the computed style of the color
  const colorRGB = getComputedStyle(dummy).color;

  // Remove the dummy element
  document.body.removeChild(dummy);

  // Convert RGB to Hex
  const rgb = colorRGB.match(/\d+/g);
  const colorHex = `#${rgb
    ?.map((x) => {
      const hex = Number(x).toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    })
    .join('')}`;

  return colorHex;
}

// This function takes a background color string and returns a text color string that contrasts well with it
function getTextColor(backgroundColor: string): string {
  // Convert the background color to hex
  const hexColor = convertColorStringToHex(backgroundColor);

  // Extract the RGB values from the hex color
  const r = parseInt(hexColor.substring(1, 2), 16);
  const g = parseInt(hexColor.substring(3, 2), 16);
  const b = parseInt(hexColor.substring(5, 2), 16);

  // Calculate the brightness of the color using the formula for relative luminance
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness of the color
  return brightness >= 128 ? '#000000' : '#ffffff';
}

// This component displays a tag with a name and a background color
export const Tag: React.FC<TagProps> = ({ name, color }) => (
  <div className={styles.tag_container} style={{ backgroundColor: color }}>
    <span className={styles.tag_name} style={{ color: getTextColor(color) }}>
      {name}
    </span>
  </div>
);
