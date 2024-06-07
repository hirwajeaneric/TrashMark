/* eslint-disable react/prop-types */
import  { Fragment } from 'react'
import { Image, Text, View, Page, Document, StyleSheet } from '@react-pdf/renderer';
import logo from '/logo-big.png'

  const TrashReport = ({reportType, reportPeriod}) => {
    const trashCategories = [
        {
            title: "Home Appliance",
            value: 123452,
        },
        {
            title: "Clothing",
            value: 22456,
        },
        {
            title: "Shoes",
            value: 33458,
        },
        {
            title: "Furniture",
            value: 24459,
        },
        {
            title: "Electronics",
            value: 23460,
        },
        {
            title: "Phone",
            value: 103461,
        },
        {
            title: "Computer",
            value: 12341,
        },
        {
            title: "Part of house",
            value: 12461,
        },
        {
            title: "Cereals",
            value: 23461,
        },
        {
            title: "Other food items",
            value: 123461,
        },
    ]

    const styles = StyleSheet.create({
        page: {fontSize: 11,paddingTop: 20,paddingLeft: 40,paddingRight: 40,lineHeight: 1.5,flexDirection: 'column' },
        spaceBetween : {flex : 1,flexDirection: 'row',alignItems:'center',justifyContent:'space-between',color: "#3E3E3E" },
        titleContainer: {flexDirection: 'row',marginTop: 24},
        logo: { width: 90 },
        reportTitle: {  fontSize: 16,  textAlign: 'center' },
        addressTitle : {fontSize: 11,fontStyle: 'bold'}, 
        invoice : {fontWeight: 'bold',fontSize: 20},
        invoiceNumber : {fontSize: 11,fontWeight: 'bold'}, 
        address : { fontWeight: 400, fontSize: 10},
        theader : {marginTop : 20,fontSize : 10,fontStyle: 'bold',paddingTop: 4 ,paddingLeft: 7 ,flex:1,height:20,backgroundColor : '#DEDEDE',borderColor : 'whitesmoke',borderRightWidth:1,borderBottomWidth:1},
        theader2 : { flex:2, borderRightWidth:0, borderBottomWidth:1},
        tbody:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1, borderColor : 'whitesmoke', borderRightWidth:1, borderBottomWidth:1},
        total:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1.5, borderColor : 'whitesmoke', borderBottomWidth:1},
        tbody2:{ flex:2, borderRightWidth:1, }
    });

    const InvoiceTitle = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <Image style={styles.logo} src={logo} />
                <Text style={styles.reportTitle}>TrashMark</Text>
            </View>
        </View>
    );

    const Address = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View>
                    <Text style={styles.invoice}>{`${reportPeriod}ly ${reportType} Report`}</Text>
                </View>
                <Text style={styles.addressTitle}>{new Date().toDateString()}</Text>
                {/* <View>
                    <Text style={styles.addressTitle}>7, Ademola Odede, </Text>
                    <Text style={styles.addressTitle}>Ikeja,</Text>
                    <Text style={styles.addressTitle}>Lagos, Nigeria.</Text>
                </View> */}
            </View>
        </View>
    );

    // const UserAddress = () => (
    //     <View style={styles.titleContainer}>
    //         <View style={styles.spaceBetween}>
    //             <View style={{maxWidth : 200}}>
    //                 <Text style={styles.addressTitle}>Bill to </Text>
    //                 <Text style={styles.address}>
    //                     {reciept_data.address}
    //                 </Text>
    //             </View>
    //             <Text style={styles.addressTitle}>{reciept_data.date}</Text>
    //         </View>
    //     </View>
    // );

    const SimpleStatistics = () => (
        <View>
            <View>
                <Text>Renewable trash: {3233}</Text>
            </View>
            <View>
                <Text>Non-renewable trash: {3200}</Text>
            </View>

            <View style={{ marginTop: '20px' }}>
                <Text>Frequent Trash Categories: {10}</Text>
            </View>
            <View style={{ marginTop: '20px' }}>
                <Text style={{ fontWeight: "bold" }}>Trash Categories</Text>
            </View>
        </View>
    )

    const TableHead = () => (
        <View style={{ width:'100%', flexDirection :'row', marginTop:10}}>
            <View style={[styles.theader, styles.theader2]}>
                <Text>Trash Category</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Occurences</Text>   
            </View>
        </View>
    );


    const TableBody = () => (
        trashCategories.map((category, index)=>(
        <Fragment key={index}>
            <View style={{ width:'100%', flexDirection :'row'}}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text >{category.title}</Text>   
                </View>
                <View style={styles.tbody}>
                    <Text>{category.value} </Text>   
                </View>
            </View>
        </Fragment>
       ))
    );

    // const TableTotal = () => (
    //     <View style={{ width:'100%', flexDirection :'row'}}>
    //         <View style={styles.total}>
    //             <Text></Text>   
    //         </View>
    //         <View style={styles.total}>
    //             <Text> </Text>   
    //         </View>
    //         <View style={styles.tbody}>
    //             <Text>Total</Text>   
    //         </View>
    //         <View style={styles.tbody}>
    //             <Text>
    //                 {reciept_data.items.reduce((sum, item)=> sum + (item.price * item.qty), 0)}
    //             </Text>  
    //         </View>
    //     </View>
    // );

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <InvoiceTitle  />
                <Address/>
                {/* <UserAddress/> */}
                <SimpleStatistics/>
                <TableHead/>
                <TableBody/>
                {/*<TableTotal/> */}
            </Page>
        </Document>
          
    )
}

export default TrashReport