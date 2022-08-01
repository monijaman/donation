
function DonationItem({ donation }) {
    return (
        <div className='donations'>
            <div>Payment Date: {new Date(donation.createdAt).toLocaleString('en-US')}</div>
            <h2>{donation.payment} tk</h2>
            <h2>{donation.paymenttype}</h2>

        </div>
    )
}

export default DonationItem
