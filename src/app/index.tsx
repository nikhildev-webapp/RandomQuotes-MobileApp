import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  const [data, setData] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setData(json.quote);
      setAuthor(json.author);
    } catch (err) {
      console.error(err);
      setError(true);
      setData("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Random Quotes Generator</Text>

      <Pressable
        style={({ pressed }) => [
          styles.btnWrapper,
          pressed && styles.btnPressed,
          loading && styles.btnDisabled,
        ]}
        onPress={fetchData}
        disabled={loading}
      >
        <Text style={styles.btnText}>
          {loading ? "Loading..." : "Generate Quote"}
        </Text>
      </Pressable>

      <View style={styles.quoteContainer}>
        {loading && <Text style={styles.quoteText}>Loading...</Text>}
        {!loading && error && (
          <Text style={styles.errorText}>
            Error fetching quote. Please try again.
          </Text>
        )}
        {!loading && !error && data !== "" && (
          <>
            <Text style={styles.quoteText}>"{data}"</Text>
            {author !== "" && <Text style={styles.authorText}>— {author}</Text>}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textHeading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  btnWrapper: {
    marginTop: 16,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
    backgroundColor: "#333",
    borderColor: "#333",
  },
  btnPressed: {
    opacity: 0.75,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  quoteContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  quoteText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    fontStyle: "italic",
  },
  authorText: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
    fontWeight: "600",
  },
  errorText: {
    fontSize: 16,
    color: "#DC2626",
    textAlign: "center",
  },
});
