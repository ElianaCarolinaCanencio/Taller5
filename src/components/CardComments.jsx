export default function CardComments({ name, email, body }) {
  return (
    <div className="flex items-start gap-2 border-b-[1px] border-[#272729] pb-2">
      <img
        src="https://styles.redditmedia.com/t5_2qrpc/styles/communityIcon_6nx5ls5qkre41.png?width=48&height=48&frame=1&auto=webp&crop=48:48,smart&s=d4dac65dc9921ccb0770a1841c0a0472abc4ccf0"
        alt="Subreddit icon"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{email}</span>
          </div>
        </div>
        <h2 className="text-lg font-medium my-2">{name}</h2>
        <p className="text-sm mb-2">{body}</p>
      </div>
    </div>
  )
}
