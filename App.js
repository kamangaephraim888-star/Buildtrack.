import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
SafeAreaView,
ScrollView,
View,
Text,
StyleSheet,
} from 'react-native';

export default function App() {
return (
<SafeAreaView style={styles.container}>
<StatusBar style="light" />

  <ScrollView>
    <View style={styles.header}>
      <Text style={styles.brand}>BUILDTRACK</Text>
      <Text style={styles.subtitle}>
        Your building project, under control.
      </Text>
    </View>

    <View style={styles.welcome}>
      <Text style={styles.welcomeTitle}>Project Dashboard</Text>
      <Text style={styles.welcomeText}>
        Track your construction budget, materials and progress.
      </Text>
    </View>

    <Text style={styles.sectionTitle}>Budget Overview</Text>

    <View style={styles.card}>
      <Text style={styles.label}>Total Budget</Text>
      <Text style={styles.amount}>$10,000.00</Text>
      <Text style={styles.note}>Example budget — USD</Text>
    </View>

    <View style={styles.row}>
      <View style={styles.smallCard}>
        <Text style={styles.label}>Spent</Text>
        <Text style={styles.spent}>$2,500</Text>
      </View>

      <View style={styles.smallCard}>
        <Text style={styles.label}>Remaining</Text>
        <Text style={styles.remaining}>$7,500</Text>
      </View>
    </View>

    <Text style={styles.sectionTitle}>Project Tools</Text>

    <View style={styles.tool}>
      <Text style={styles.toolTitle}>🧱 Materials</Text>
      <Text style={styles.toolText}>
        Keep track of cement, bricks, roofing and other supplies.
      </Text>
    </View>

    <View style={styles.tool}>
      <Text style={styles.toolTitle}>💰 Expenses</Text>
      <Text style={styles.toolText}>
        Record payments and monitor construction costs.
      </Text>
    </View>

    <View style={styles.tool}>
      <Text style={styles.toolTitle}>🏠 Progress</Text>
      <Text style={styles.toolText}>
        Organise your building project from foundation to completion.
      </Text>
    </View>

    <Text style={styles.footer}>
      BUILDTRACK • Build smarter, spend wiser.
    </Text>
  </ScrollView>
</SafeAreaView>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F3F6FA',
},
header: {
backgroundColor: '#10243A',
padding: 24,
paddingTop: 35,
},
brand: {
color: '#FFFFFF',
fontSize: 28,
fontWeight: 'bold',
letterSpacing: 2,
},
subtitle: {
color: '#C5D3E2',
fontSize: 14,
marginTop: 8,
},
welcome: {
margin: 18,
padding: 20,
backgroundColor: '#FFFFFF',
borderRadius: 16,
},
welcomeTitle: {
fontSize: 22,
fontWeight: 'bold',
color: '#10243A',
},
welcomeText: {
color: '#64748B',
marginTop: 8,
lineHeight: 22,
},
sectionTitle: {
fontSize: 19,
fontWeight: 'bold',
color: '#10243A',
marginHorizontal: 18,
marginTop: 12,
marginBottom: 12,
},
card: {
backgroundColor: '#176B55',
marginHorizontal: 18,
padding: 22,
borderRadius: 16,
},
label: {
color: '#64748B',
fontSize: 14,
},
amount: {
color: '#FFFFFF',
fontSize: 30,
fontWeight: 'bold',
marginTop: 8,
},
note: {
color: '#D1FAE5',
marginTop: 8,
fontSize: 12,
},
row: {
flexDirection: 'row',
marginHorizontal: 12,
},
smallCard: {
flex: 1,
backgroundColor: '#FFFFFF',
padding: 18,
margin: 6,
borderRadius: 14,
},
spent: {
color: '#DC6B38',
fontSize: 21,
fontWeight: 'bold',
marginTop: 8,
},
remaining: {
color: '#176B55',
fontSize: 21,
fontWeight: 'bold',
marginTop: 8,
},
tool: {
backgroundColor: '#FFFFFF',
marginHorizontal: 18,
marginBottom: 12,
padding: 18,
borderRadius: 14,
},
toolTitle: {
color: '#10243A',
fontSize: 17,
fontWeight: 'bold',
},
toolText: {
color: '#64748B',
lineHeight: 21,
marginTop: 7,
},
footer: {
color: '#64748B',
textAlign: 'center',
margin: 24,
fontSize: 12,
},
});
