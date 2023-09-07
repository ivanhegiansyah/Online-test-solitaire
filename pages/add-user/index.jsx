import { useState } from 'react';
import { addUser } from '../../service/user';
import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Index() {
  const [data, setData] = useState();
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && job !== '') {
      addUser({ name: name, job: job })
        .then((res) => setData(res?.data))
        .catch((e) => console.log(e));
    }
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className=" px-5 py-10">
          <h6 className="font-semibold text-xl">Add User</h6>
          <div className="">
            <form onSubmit={handleSubmit}>
              <Input
                name={'name'}
                type={'text'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={'Input your name'}
                text={'Name'}
              />
              <Input
                name={'job'}
                type={'text'}
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder={'Input your job'}
                text={'Job'}
              />
              <Button text={'Submit'} className={'mt-10'} type={'submit'} />
            </form>
          </div>
        </div>
        {data && (
          <>
            <h6 className="font-semibold text-xl">Response after POST:</h6>
            <div className="font-semibold">
              <div>{data.name}</div>
              <div>{data.job}</div>
              <div>{data.id}</div>
              <div>{data.createdAt}</div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
