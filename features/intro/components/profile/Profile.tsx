import Image from 'next/image';

const Profile = () => {
    return (
        <>
        <Image
            src="/images/Introduce/introduce.jpg"
            alt="プロフィール写真"
            width={100}
            height={100}
            className='rounded-full border-2 border-solid border-[var(--color-one)] m-auto'
        />
        <h3 className='underline'>プロフィール</h3>
        <p>兵庫県神戸市出身、京都府京都市在住の大学生</p>
        <p>大学に入ってから旅行にハマりこれまでに全国、そして世界を旅する</p>
        <p>現在、HTML,CSS,JavaScriptを勉強中でアウトプットのためにブログを始める</p>
        <p>現在はReact,Next.jsを勉強中</p>
        </>
    );
}

export default Profile;
