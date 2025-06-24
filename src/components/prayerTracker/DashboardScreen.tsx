import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, PermissionsAndroid, Platform } from "react-native";
// import Geolocation from "@react-native-community/geolocation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import tw from "twrnc";
import ProgressGrid from "./ProgressGrid";
// import QazaGrid from "../components/QazaGrid";

const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

// const fetchPrayerLog = async () => {
//     console.log("heloo");
    
//   const res = await fetch("http://10.0.2.2:3000/prayer-log", {
//     credentials: "include",
//   });
//   console.log({res})
//   if (res.status === 401) throw new Error("unauthorized");
//   const data = await res.json();
//   const today = new Date().toISOString().split("T")[0];
//   const fetchedPrayerLog = data.prayerLog.prayerLog || {};

//   return Object.fromEntries(
//     prayers.map((prayer) => [
//       prayer,
//       fetchedPrayerLog[prayer.toLowerCase()]?.includes(today) ? [today] : [],
//     ])
//   );
// };

// const fetchPrayerTimes = async () => {
//   const getLocation = () =>
//     new Promise((resolve, reject) => {
//       Geolocation.getCurrentPosition(resolve, reject, {
//         enableHighAccuracy: true,
//         timeout: 15000,
//         maximumAge: 10000,
//       });
//     });

//   if (Platform.OS === "android") {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//     );
//     if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//       throw new Error("Location permission denied");
//     }
//   }

//   try {
//     const position = await getLocation();
//     const { latitude, longitude } = position.coords;
//     const geoRes = await fetch(
//       `https://us1.locationiq.com/v1/reverse.php?key=pk.0ac8780e6500af272e9ec67ec462f384&lat=${latitude}&lon=${longitude}&format=json`
//     );
//     const geo = await geoRes.json();
//     const { city, country, county } = geo.address;
//     const date = new Date();
//     const todayMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

//     const timeRes = await fetch(
//       `https://api.aladhan.com/v1/timingsByCity/${todayMDY}?city=${city || county.split(" ")[0]}&country=${country}&method=0`
//     );
//     const timeData = await timeRes.json();
//     return timeData.data.timings;
//   } catch (e) {
//     throw new Error("Failed to fetch location or prayer times");
//   }
// };

// const updatePrayerLog = async ({ prayer, date }) => {
//   const res = await fetch(`https://namaz-api.irtaza.xyz/prayer-log/${prayer.toLowerCase()}`, {
//     method: "PUT",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ date }),
//   });

//   if (!res.ok) throw new Error("Failed to update prayer log");
//   return true;
// };

const DashboardScreen = () => {
    const queryClient = useQueryClient();
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const prayerLog = {
                "fajr": [],
                "dhuhr": [],
                "asr": [],
                "maghrib": [],
                "isha": []
            ,
            "qazaLog": {
                "Fajr": 0,
                "Dhuhr": 0,
                "Asr": 0,
                "Maghrib": 0,
                "Isha": 0
            },
            "_id": "6849fb4ec2939ff33f96f3ac",
            "userId": "6849fb43c2939ff33f96f3a7",
            "createdAt": "2025-06-11T21:55:26.792Z",
            "__v": 0
    }
//     const {
//     data: prayerLog,
//     isLoading: loadingLog,
//     isError: errorLog,
//     refetch: refetchLog,
//   } = useQuery({ queryKey: ["prayerLog"], queryFn: fetchPrayerLog });

//   const {
//     data: prayerTimes,
//     isLoading: loadingTimes,
//     isError: errorTimes,
//   } = useQuery({ queryKey: ["prayerTimes"], queryFn: fetchPrayerTimes });

//   const mutation = useMutation({
//     mutationFn: updatePrayerLog,
//     onSuccess: ({ prayer, date }) => {
//         queryClient.setQueryData(["prayerLog"], (oldData) => {
//           if (!oldData) return oldData;
//           return {
//             ...oldData,
//             [prayer]: oldData[prayer]?.includes(date)
//               ? oldData[prayer].filter((d) => d !== date)
//               : [...(oldData[prayer] || []), date],
//           };
//         });
//       setRefreshTrigger((prev) => prev + 1);
//     },
//   });

//   const handleCheck = (prayer) => {
//     const today = new Date().toISOString().split("T")[0];
//     mutation.mutate({ prayer, date: today });
//   };

//   const isPrayerDisabled = (prayer) => {
//     const currentTime = new Date();
//     const prayerTimeString = prayerTimes?.[prayer];
//     if (!prayerTimeString) return false;
//     const [h, m] = prayerTimeString.split(":");
//     const prayerTime = new Date();
//     prayerTime.setHours(h, m, 0, 0);

//     if (prayer === "Asr") {
//       const zuhrTimeString = prayerTimes["Dhuhr"];
//       if (!zuhrTimeString) return true;
//       const [zh, zm] = zuhrTimeString.split(":");
//       const zuhrTime = new Date();
//       zuhrTime.setHours(zh, zm, 0, 0);
//       return currentTime < zuhrTime;
//     }

//     if (prayer === "Isha") {
//       const maghribTimeString = prayerTimes["Maghrib"];
//       if (!maghribTimeString) return true;
//       const [mh, mm] = maghribTimeString.split(":");
//       const maghribTime = new Date();
//       maghribTime.setHours(mh, mm, 0, 0);
//       return currentTime < maghribTime;
//     }

//     return currentTime < prayerTime;
//   };

//   if (loadingLog || loadingTimes)
//     return (
//       <View style={tw`items-center justify-center h-full`}>
//         <ActivityIndicator size="large" />
//       </View>
//     );

//   if (errorLog || errorTimes)
//     return (
//       <View style={tw`items-center justify-center h-full`}>
//         <Text style={tw`text-red-600`}>Failed to load data.</Text>
//       </View>
//     );

  return (
    <ScrollView contentContainerStyle={tw`p-4`}>
        <Text>Hello</Text>
      <View style={tw`bg-[#cbdfde] rounded-lg p-4 shadow-md mb-4`}>
        <Text style={tw`text-xl font-bold text-center text-[#2d3939]`}>NAMAZ TRACKER</Text>
        <View style={tw`flex-row flex-wrap justify-center mt-4`}>
          {prayers.map((prayer) => {
            const today = new Date().toISOString().split("T")[0];
            const isChecked = prayerLog[prayer]?.includes(today);
            const disabled = false 
            // isPrayerDisabled(prayer);

            return (
              <TouchableOpacity
                key={prayer}
                style={tw`
                  m-1 p-3 w-[45%] rounded-lg items-center
                  ${isChecked ? "bg-green-300" : "bg-white"}
                  ${disabled ? "opacity-50" : ""}`}
                disabled={disabled}
                onPress={() => {}
                    // handleCheck(prayer)
                }
              >
                <Text style={tw`text-base font-semibold`}>{prayer} - {prayerTimes[prayer] || "N/A"}</Text>
                <Text style={tw`text-xl`}>{isChecked ? "✔" : "✗"}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View>
        <ProgressGrid refreshTrigger={refreshTrigger} />
        {/* <QazaGrid /> */}
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
