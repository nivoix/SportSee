class ScoreModel {
  constructor(user) {
    this.userScore = user?.score * 100 || user?.todayScore * 100;
  }
}

class AverageModel {
  constructor(data) {
    this.data = data;
  }
  getFormattedData() {
    const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

    return this.data?.map((session, index) => ({
      day: daysOfWeek[index],
      sessionLength: session.sessionLength,
    }));
  }
}

class ActivityModel {
  constructor(data) {
    this.data = data;
  }

  getFormattedData() {
    return {
      formattedData: this.data?.map((session, index) => ({
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories,
      })),
    };
  }
}

class PerformanceModel {
  constructor(data, kind) {
    this.data = data;
    this.kind = kind;
  }

  getFormattedData() {
    const formatKindName = (kind) => {
      if (kind === "cardio") return "Cardio";
      if (kind === "energy") return "Energie";
      if (kind === "endurance") return "Endurance";
      if (kind === "strength") return "Force";
      if (kind === "speed") return "Vitesse";
      if (kind === "intensity") return "Intensité";
      return kind;
    };

    const reversedData = this.data?.slice().reverse();

    return reversedData?.map((dataEntry) => ({
      kind: formatKindName(this.kind[dataEntry.kind]),
      value: dataEntry.value,
    }));
  }
}

export { PerformanceModel, ScoreModel, AverageModel, ActivityModel };
