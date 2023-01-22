export default function CountryRoute(location: string) {
  return location.split(",")[0].toLowerCase();
}
