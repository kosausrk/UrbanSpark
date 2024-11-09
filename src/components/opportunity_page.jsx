import OpportunityCard from "./opportunity_card";

export default function OpportunityPage() {

    const cards = [
        <OpportunityCard
        uri={'/'}
        name={'Food'}
        description={<p>Locations to Food Pantry Services</p>}
        img_uri={'https://nycommonpantry.org/wp-content/uploads/2021/12/DSC_1242-Edit-Edit-Edit_R01-scaled.jpeg'}

        ></OpportunityCard>
    ]


    return (
        <>
            {cards.map((el) => {
                return (
                <div>{el}</div>
                )
            })}
        </>
    )
}