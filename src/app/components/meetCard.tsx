interface MeetCardProps {
    imgPath: any;
    blurb: string;
}

const MeetCard: React.FC<MeetCardProps> = ({ imgPath, blurb }) => {
    return (
        <div className="w-2/3 h-full flex flex-col justify-center items-center p-4 bg-accent/50 rounded-2xl">
            <div className="bg-text h-48 w-48 rounded-full mb-2"></div>
            <div className="mt-2 w-5/6">
                <p className="text-text text-lg">{blurb}</p>
            </div>
        </div>
    );
}

export default MeetCard;