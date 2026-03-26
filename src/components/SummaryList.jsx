import data from '../../data.json';
import ListItem from './ListItem';

const SummaryList = () => {
    return (
        <ul className='flex flex-col gap-4'>
            {
                data.map(item => (
                    <ListItem key={item.score} item={item} />
                )
                )
            }
        </ul>
    )
}

export default SummaryList