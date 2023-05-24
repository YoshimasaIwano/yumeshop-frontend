import styles from './styles.module.scss';

interface TagsProps {
  id: string;
  name: string;
  color: string;
  tagGroup: string;
}

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
  const colorHex =
    `#${ 
    rgb
      ?.map((x) => {
        const hex = Number(x).toString(16);
        return hex.length === 1 ? `0${  hex}` : hex;
      })
      .join('')}`;

  return colorHex;
}


function getTextColor(backgroundColor: string): string {
  const hexColor = convertColorStringToHex(backgroundColor);
  const r = parseInt(hexColor.substring(1, 2), 16);
  const g = parseInt(hexColor.substring(3, 2), 16);
  const b = parseInt(hexColor.substring(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness >= 128 ? '#000000' : '#ffffff';
}

export const Tags: React.FC<TagsProps> = ({ name, color }) => (
  <div className={styles.tag_container} style={{ backgroundColor: color }}>
    <span className={styles.tag_name} style={{ color: getTextColor(color) }}>
      {name}
    </span>
  </div>
);

