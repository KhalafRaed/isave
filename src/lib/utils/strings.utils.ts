export function getNameInitials(name?: string | null) {
  if (!name) {
    return "";
  }
  return name
    .split(" ")
    .map((name) => name.substr(0, 1))
    .join("");
}
