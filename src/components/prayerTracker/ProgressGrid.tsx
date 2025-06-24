import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";

const shades = ["#f5f5f5", "#e4c889", "#d3ae67", "#c79c32"];

const ProgressGrid = ({ refreshTrigger }:any) => {
  const [prayerSummary, setPrayerSummary] = useState<any>({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPrayerSummary = async () => {
      try {
        const response = await fetch("https://namaz-api.irtaza.xyz/prayer-summary", {
    credentials: "include",
  });
  const data = await response.json();

        setPrayerSummary(data.prayerCounts);
      } catch (err) {
        setError("Failed to fetch prayer summary.");
      }
    };

    fetchPrayerSummary();
  }, [refreshTrigger]);

  const getShade = (count:number) => {
    if (count === 5) return shades[3];
    if (count >= 3) return shades[2];
    if (count >= 1) return shades[1];
    return shades[0];
  };

  const generateGrid = () => {
    const dates = Object.keys(prayerSummary);
    const maxDays = 30;
    const today = new Date();
    const grid = [];

    for (let i = maxDays - 1; i >= 0; i--) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      const dayString = day.toISOString().split("T")[0];
      const count = prayerSummary[dayString] || 0;

      grid.push(
        <View
          key={dayString}
          style={[
            tw`w-[20px] h-[20px] border border-gray-300 rounded`,
            { backgroundColor: getShade(count) },
          ]}
        />
      );
    }

    return grid;
  };

  return (
    <ScrollView contentContainerStyle={tw`items-center p-4`}>
      <View
        style={tw`bg-[#cbdfde] rounded-lg p-5 shadow-md items-center max-w-[95%]`}
      >
        <Text style={tw`text-lg text-[#2d3939] font-semibold`}>Progress</Text>
        <Text style={tw`text-base text-[#2d3939]`}>Last 30 days</Text>

        <View
          style={tw`flex-row flex-wrap justify-center gap-1 mt-4 bg-[#cbdfde] p-2 rounded-lg shadow-md`}
        >
          {error ? <Text>{error}</Text> : generateGrid()}
        </View>

        <View style={tw`mt-4 flex-col items-center gap-2`}>
          <View style={tw`flex-row items-center gap-2`}>
            <View style={tw`w-[15px] h-[15px] border border-gray-300 rounded`} />
            <Text style={tw`text-[#2d3939]`}>No prayers</Text>
          </View>
          <View style={tw`flex-row items-center gap-2`}>
            <View
              style={[
                tw`w-[15px] h-[15px] border border-gray-300 rounded`,
                { backgroundColor: shades[1] },
              ]}
            />
            <Text style={tw`text-[#2d3939]`}>1-2 prayers</Text>
          </View>
          <View style={tw`flex-row items-center gap-2`}>
            <View
              style={[
                tw`w-[15px] h-[15px] border border-gray-300 rounded`,
                { backgroundColor: shades[2] },
              ]}
            />
            <Text style={tw`text-[#2d3939]`}>3-4 prayers</Text>
          </View>
          <View style={tw`flex-row items-center gap-2`}>
            <View
              style={[
                tw`w-[15px] h-[15px] border border-gray-300 rounded`,
                { backgroundColor: shades[3] },
              ]}
            />
            <Text style={tw`text-[#2d3939]`}>5 prayers</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProgressGrid;
