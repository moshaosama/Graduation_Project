const useGetTime = () => {
  const time = new Date();
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // تحويل الساعات إلى 12 ساعة
  hours = hours % 12;
  hours = hours ? hours : 12; // الساعة 0 تبقى 12

  return { hours, minutes, seconds, ampm };
};

export default useGetTime;
