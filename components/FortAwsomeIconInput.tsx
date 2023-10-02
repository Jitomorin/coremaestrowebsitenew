// FontAwesomeIconInput.tsx
import React, { FC } from "react";
import * as FaIcons from "@fortawesome/free-solid-svg-icons";
import { SelectInput } from "sanity";
import { Card, Select, Stack } from "@sanity/ui";

interface FontAwesomeIconInputProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

const FontAwesomeIconInput: FC<FontAwesomeIconInputProps> = ({
  onChange,
  value,
}) => {
  // Define your custom input component here
  // This could be a dropdown or any other interface to select FontAwesome icons

  const handleIconChange = (selectedIcon: any) => {
    console.log(selectedIcon);
    value = selectedIcon;
  };

  return (
    <div>
      <Card padding={4}>
        <Stack>
          <Select
            onChange={(e) => handleIconChange(e.target.value)}
            fontSize={[2, 2, 3, 4]}
            padding={[3, 3, 4]}
            space={[3, 3, 4]}
          >
            <optgroup label="FA Icons">
              {Object.keys(FaIcons).map((icon, index) => {
                return (
                  <option key={index} value={icon}>
                    {icon}
                  </option>
                );
              })}
            </optgroup>
          </Select>
        </Stack>
      </Card>
    </div>
  );
};

export default FontAwesomeIconInput;
