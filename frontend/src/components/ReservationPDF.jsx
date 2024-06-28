import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 30 },
  details: { fontSize: 14, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  total: { fontSize: 16, fontWeight: 'bold' },
});

const ReservationPDF = ({ reservation }) => {
  const tax = reservation.price * 0.1; // Assuming 10% tax
  const total = reservation.price + tax;

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Reservation Details</Text>
        <Text style={styles.details}>Reservation ID: {reservation._id}</Text>
        <Text style={styles.details}>First Name: {reservation.fristname}</Text>
        <Text style={styles.details}>Last Name: {reservation.lastname}</Text>
        <Text style={styles.details}>Mobile: {reservation.mobile}</Text>
        <Text style={styles.details}>Email: {reservation.email}</Text>
        <Text style={styles.details}>Buffet Type: {reservation.buffetType}</Text>
        <Text style={styles.details}>Date:  {moment(reservation.date).format("l")}</Text>
        <Text style={styles.details}>Quantity: {reservation.quantity}</Text>
        <View style={styles.row}>
          <Text style={styles.details}>Subtotal:</Text>
          <Text style={styles.details}>{reservation.price}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.details}>Tax (10%):</Text>
          <Text style={styles.details}>{tax.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.total}>{total.toFixed(2)}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReservationPDF;